import * as React from 'react';

import { Registry } from '@/registry/schema';

const glinui: Registry = {
  alert: {
    name: 'alert',
    type: 'components:glinui',
    files: ['registry/components/glinui/alert.tsx'],
  },
};

const example: Registry = {
  'alert-demo': {
    name: 'alert-demo',
    type: 'components:example',
    registryDependencies: ['alert'],
    files: ['registry/components/example/alert-demo.tsx'],
    component: React.lazy(
      () => import('@/registry/components/example/alert-demo')
    ),
  },
};
export const registry: Registry = {
  ...glinui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {}
);
export const downloadRegistry: Registry = { ...glinui, ...updatedExample };

export type ComponentName = keyof (typeof glinui & typeof example);
