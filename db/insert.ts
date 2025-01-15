
import { db } from "./index";
import { projects, caseStudies, type InsertProject, type InsertCaseStudy } from "./schema";

export async function addProject(projectData: InsertProject) {
  try {
    await db.insert(projects).values(projectData).execute();
    return { success: true };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, error };
  }
}

export async function addCaseStudy(caseStudyData: InsertCaseStudy) {
  try {
    await db.insert(caseStudies).values(caseStudyData).execute();
    return { success: true };
  } catch (error) {
    console.error("Error adding case study:", error);
    return { success: false, error };
  }
}
