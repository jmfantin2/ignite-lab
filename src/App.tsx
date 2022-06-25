import { gql, useQuery } from "@apollo/client";

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
        bio
      }
    }
  }
`;
