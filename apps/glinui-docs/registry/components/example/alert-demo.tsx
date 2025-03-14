import { Terminal } from 'lucide-react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/registry/components/glinui/alert';

export default function AlertDemo() {
  return (
    <Alert>
      <Terminal className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        - You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
