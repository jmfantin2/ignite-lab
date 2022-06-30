import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

// FRONTEND: type the damn data
interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((l) => {
          return (
            <Lesson
              key={l.id}
              title={l.title}
              slug={l.slug}
              availableAt={new Date(l.availableAt)}
              type={l.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}

// BACKEND: serve the damn data
const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
`;
