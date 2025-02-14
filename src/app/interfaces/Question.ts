export interface DataSourseQuestions {
    level?: number;
    question?: Question[];
}
export interface Question{
    level: number;
    type:string;
    label:string;
    answers:answer[];
}
export interface answer{
    label:string;
    isCorrect:boolean;
    src?:string;
}
