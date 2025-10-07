import React from "react";

// 1️⃣ Original component (WrappedComponent)
function Message({ name, greeting }) {
  return <h2>{greeting} {name}</h2>;
}

// 2️⃣ HOC
const withGreeting = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} greeting="Hello from HOC" />;
  };
};

// 3️⃣ Enhanced component
const MessageWithGreeting = withGreeting(Message);

// 4️⃣ App
export default function HOC() {
  return <MessageWithGreeting name="Rakesh" />;
}
