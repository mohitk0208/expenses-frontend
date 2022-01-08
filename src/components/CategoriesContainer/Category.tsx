import { Link } from "react-router-dom"
import { I_GET_CATEGORIES } from "../../types/apiQueriesResponse.types"
import { routes } from "../../utils/routeStrings"

interface CategoryProp {
  category: I_GET_CATEGORIES
}

const Category: React.FC<CategoryProp> = ({ category }) => {
  return (
    <Link to={routes.EXPENSES(category.id)} >
      <div className=" h-52 relative rounded-md overflow-hidden group hover:shadow-lg " >
        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200 ease-in-out group-hover:blur-sm" src={category.backgroundUrl} alt="" />
        <p className="absolute left-0 right-0 py-3 px-2 text-center font-bold text-lg group-hover:text-2xl transition-all text-amber-300 group-hover:text-amber-400 bottom-0 bg-black/20 group-hover:bg-black/40 duration-200 ease-in-out " >{category.name}</p>
      </div>
    </Link>

  )
}

export default Category