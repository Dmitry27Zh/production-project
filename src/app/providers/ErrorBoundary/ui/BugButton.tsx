/* eslint-disable i18next/no-literal-string */
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export function BugButton() {
  const [error, setError] = useState(false);
  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>
      Throw Error
    </Button>
  );
}
