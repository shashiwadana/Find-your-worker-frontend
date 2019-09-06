export interface Job {
    SkillId: number;
    SkillTitle: string;
}

export interface JobModelRes {
    recordset: Array<Job>;
}