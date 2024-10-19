import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function LoadingButton({ onClick }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    onClick(); // Call the passed function when the button is clicked
  };

  return (
    <Button
      className="mt-3"
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Click to load meal"}
    </Button>
  );
}

export default LoadingButton;
