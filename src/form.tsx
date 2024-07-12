"use client";
import { JsonForms } from "@jsonforms/react";
import { Form } from "antd";
import {
  rendererRegistryEntries,
  cellRegistryEntries,
} from "@great-expectations/jsonforms-antd-renderers";

export function AntdForm() {
  return (
    <Form>
      <JsonForms
        data={undefined}
        schema={{
          type: "object",
          properties: {
            name: {
              type: "string",
              title: "Name",
            },
            description: {
              type: "string",
              title: "Description",
            },
          },
        }}
        renderers={rendererRegistryEntries}
        cells={cellRegistryEntries}
      />
    </Form>
  );
}
