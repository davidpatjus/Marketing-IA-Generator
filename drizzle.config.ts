/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/utils/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://AI-Content-Generator_owner:a3k8UoWHbEIe@ep-noisy-feather-a5loa715.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
  }
};