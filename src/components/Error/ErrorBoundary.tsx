import React, { ReactNode } from "react";
import ErrorMessage from "./ErrorMessage";

interface BoundaryProps {
  children?: ReactNode;
}

interface BoundaryState {
  hasError: Boolean;
  error?: Error;
}

interface ErrorInfo {
  componentStack: string;
}

export default class ErrorBoundary extends React.Component<
  BoundaryProps,
  BoundaryState
> {
  constructor(props: BoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, { componentStack }: ErrorInfo) {
    console.error(error.message);
    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage>Oops, something went wrong!</ErrorMessage>;
    }
    return this.props.children;
  }
}
