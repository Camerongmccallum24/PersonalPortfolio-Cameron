
import { db } from "./index.js";
import { projects, caseStudies } from "./schema.js";

async function checkDatabase() {
  try {
    const allProjects = await db.select().from(projects);
    const allCaseStudies = await db.select().from(caseStudies);
    console.log("Projects in Database:", allProjects);
    console.log("Case Studies in Database:", allCaseStudies);
  } catch (error) {
    console.error("Error checking database:", error);
  } finally {
    process.exit(0);
  }
}

checkDatabase();
