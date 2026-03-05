import React, { useState, useCallback } from "react";
import { Box, Flex } from "./LayoutBase";

/**
 * Newsletter/Contact form integration configuration
 */
export interface NewsletterConfig {
  /** Form title */
  title?: string;
  /** Form description */
  description?: string;
  /** Placeholder for email input */
  emailPlaceholder?: string;
  /** Submit button text */
  buttonText?: string;
  /** Button variant */
  buttonVariant?: "primary" | "secondary" | "outline";
  /** Integration type */
  integration?: "formspree" | "mailchimp" | "custom";
  /** Formspree form ID */
  formspreeFormId?: string;
  /** Mailchimp action URL */
  mailchimpActionUrl?: string;
  /** Custom form action URL */
  customActionUrl?: string;
  /** Custom form method */
  customMethod?: "POST" | "GET";
  /** Success message after submission */
  successMessage?: string;
  /** Error message on failure */
  errorMessage?: string;
  /** Show name field */
  showName?: boolean;
  /** Name field placeholder */
  namePlaceholder?: string;
  /** Disable double opt-in (Mailchimp) */
  disableDoubleOptIn?: boolean;
  /** Hidden fields (e.g., for tracking) */
  hiddenFields?: Record<string, string>;
}

export interface NewsletterFormProps {
  /** Newsletter configuration */
  config: NewsletterConfig;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Form style */
  formStyle?: React.CSSProperties;
  /** Input style */
  inputStyle?: React.CSSProperties;
  /** Button style */
  buttonStyle?: React.CSSProperties;
  /** Test ID for testing */
  testId?: string;
}

/**
 * Newsletter Form component with Formspree/Mailchimp integration
 */
export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  config,
  className,
  style,
  formStyle,
  inputStyle,
  buttonStyle,
  testId,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    title = "Subscribe to our newsletter",
    description = "Get the latest updates and offers delivered to your inbox.",
    emailPlaceholder = "Enter your email",
    buttonText = "Subscribe",
    buttonVariant = "primary",
    integration = "formspree",
    formspreeFormId,
    mailchimpActionUrl,
    customActionUrl,
    customMethod = "POST",
    successMessage = "Thank you for subscribing!",
    errorMessage: configErrorMessage = "Something went wrong. Please try again.",
    showName = false,
    namePlaceholder = "Enter your name",
  } = config;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");
      setErrorMessage("");

      try {
        if (integration === "formspree" && formspreeFormId) {
          const response = await fetch(
            `https://formspree.io/f/${formspreeFormId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                email,
                ...(showName && { name }),
              }),
            }
          );

          if (response.ok) {
            setStatus("success");
            setEmail("");
            setName("");
          } else {
            throw new Error("Form submission failed");
          }
        } else if (integration === "mailchimp" && mailchimpActionUrl) {
          // Mailchimp uses a form with hidden fields
          const form = document.createElement("form");
          form.action = mailchimpActionUrl;
          form.method = customMethod;
          form.hidden = true;

          const addField = (name: string, value: string) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            form.appendChild(input);
          };

          addField("EMAIL", email);
          if (showName) addField("FNAME", name);

          document.body.appendChild(form);
          form.submit();
          document.body.removeChild(form);

          setStatus("success");
          setEmail("");
          setName("");
        } else if (integration === "custom" && customActionUrl) {
          const response = await fetch(customActionUrl, {
            method: customMethod,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              ...(showName && { name }),
            }),
          });

          if (response.ok) {
            setStatus("success");
            setEmail("");
            setName("");
          } else {
            throw new Error("Form submission failed");
          }
        } else {
          // Demo mode - just show success
          setStatus("success");
          setEmail("");
          setName("");
        }
      } catch (error) {
        setStatus("error");
        setErrorMessage(configErrorMessage);
      }
    },
    [
      email,
      name,
      integration,
      formspreeFormId,
      mailchimpActionUrl,
      customActionUrl,
      customMethod,
      showName,
      configErrorMessage,
    ]
  );

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const defaultInputStyle: React.CSSProperties = {
    flex: 1,
    padding: "0.75rem 1rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    ...inputStyle,
  };

  const defaultButtonStyle: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    backgroundColor:
      buttonVariant === "primary"
        ? "#3b82f6"
        : buttonVariant === "secondary"
        ? "#6b7280"
        : "transparent",
    color: buttonVariant === "outline" ? "#3b82f6" : "#ffffff",
    border: buttonVariant === "outline" ? "1px solid #3b82f6" : "none",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    fontWeight: 500,
    cursor: isLoading ? "not-allowed" : "pointer",
    opacity: isLoading ? 0.7 : 1,
    transition: "background-color 0.2s, opacity 0.2s",
    whiteSpace: "nowrap",
    ...buttonStyle,
  };

  return (
    <Box
      className={className}
      style={style}
      data-testid={testId || "newsletter-form"}
    >
      {title && (
        <Box
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: 600,
          }}
        >
          {title}
        </Box>
      )}
      {description && (
        <Box
          style={{
            marginBottom: "1rem",
            color: "#6b7280",
            fontSize: "0.875rem",
          }}
        >
          {description}
        </Box>
      )}

      {isSuccess ? (
        <Box
          style={{
            padding: "1rem",
            backgroundColor: "#d1fae5",
            color: "#065f46",
            borderRadius: "0.375rem",
            textAlign: "center",
          }}
        >
          {successMessage}
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="0.75rem">
            {showName && (
              <input
                type="text"
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={showName}
                style={defaultInputStyle}
                disabled={isLoading}
              />
            )}
            <Flex direction="row" gap="0.5rem" wrap="wrap">
              <input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={defaultInputStyle}
                disabled={isLoading}
              />
              <button
                type="submit"
                style={defaultButtonStyle}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : buttonText}
              </button>
            </Flex>
            {isError && (
              <Box
                style={{
                  color: "#dc2626",
                  fontSize: "0.875rem",
                }}
              >
                {errorMessage}
              </Box>
            )}
          </Flex>
        </form>
      )}
    </Box>
  );
};

NewsletterForm.displayName = "NewsletterForm";

export default NewsletterForm;