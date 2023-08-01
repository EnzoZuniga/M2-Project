export const partEnum = [
  "default",
  "edit",
  "create",
  "succes",
  "update",
  "delete"
]as const;

export type PartEnumType = typeof partEnum[number];