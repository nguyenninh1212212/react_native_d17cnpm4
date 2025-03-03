export interface QuizCardCreateProps {
  title: string;
  user: {
    avatar: string;
    name: string;
    university: string;
  };
  questions: number;
  image: string;
}
