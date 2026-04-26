# TanStack Form Antd Website

This is a demonstration website showcasing the integration between **TanStack Form** and **Ant Design (v6)** using the `tanstack-form-antd` adapter.

## Core Patterns & Demos

The project includes three primary demonstration patterns, located in `src/demos/`:

### 1. Basic Form Pattern

- **Component**: `Basic.tsx`
- **Key Features**:
  - Usage of the `createForm<T>()` factory for type-safe field names.
  - Integration of standard AntD components: `Input`, `InputNumber`, `Select`, `Switch`.
  - **Dependency Subscription**: Using the `Dependency` component to subscribe to specific field changes for real-time UI updates (e.g., live preview) without re-rendering the whole form.

### 2. Editable Table (Array Fields) Pattern

- **Component**: `EditableTable.tsx`
- **Key Features**:
  - **Dynamic Array Paths**: Using `FieldArray` to manage lists. Fields are accessed via dynamic paths like `items[${index}].name`.
  - **Table Integration**: Rendering form fields directly inside AntD `Table` columns.
  - **Computed Row Values**: Calculating derived values (e.g., `Total = Price * Quantity`) in real-time as user types.
  - **Dynamic Actions**: Adding/removing items using `fieldArray.pushValue` and `fieldArray.removeValue`.

### 3. Modal CRUD Pattern

- **Component**: `CRUD.tsx`
- **Key Features**:
  - **Form Reuse**: Using a single form structure for both "Create" and "Edit" actions.
  - **Lifecycle Management**: Utilizing AntD Modal's `destroyOnClose` to ensure the form instance is reset when switching between different records.
  - **Custom Validation**: Implementing complex validation logic (e.g., Email regex) using the `validators` property.
  - **State Sync**: Synchronizing local data state with form submissions.

## Technical Implementation Guide

### Type Safety

Always use the factory pattern:

```tsx
const { Form, TextField, ... } = createForm<YourSchema>();
```

### Working with Arrays in Tables

When rendering fields in a loop or table, cast the name to `any` if the index is dynamic to satisfy TypeScript's deep path requirements:

```tsx
<TextField name={`items[${index}].name` as any} />
```

### Performance

Prefer `Dependency` or `form.Subscribe` for UI elements that depend on specific field values, rather than relying on top-level state changes.

## Directory Structure

```text
src/
├── demos/               # Implementation patterns
├── styles/              # Global styling
├── App.tsx              # Main layout & Tab navigation
└── main.tsx             # Application entry
```

## Development

```bash
# Run the development server
vp run website#dev

# Check types and linting
vp check
```
