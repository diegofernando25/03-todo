import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";


  

export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'} });
  
  /*
  useEffect(()=>{
    fetch('/api/todos')
    .then( resp => resp.json() )
    .then( console.log );
    

  }, [])
  */
  
  return (
    <div>
      <TodosGrid todos = {todos} />
    </div>
  );
}