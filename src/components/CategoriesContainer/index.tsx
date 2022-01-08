import { useEffect, useState } from "react"
import Category from "./Category"
import { useAuth } from "../../context/AuthContext"
import { I_GET_CATEGORIES } from "../../utils/apiQueriesResponseTypes"
import { endpoints } from "../../utils/endpoints"
import { GET_CATEGORIES } from "../../utils/apiQueries"

const CategoriesContainer = () => {
  const [categories, setCategories] = useState<I_GET_CATEGORIES[]>([])
  const [loading, setLoading] = useState(true)

  const { currentUser } = useAuth()

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        const res = await fetch(endpoints.GRAPHQL, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            query: GET_CATEGORIES
          })
        })
        const resData = await res.json()

        if (resData.data) {

          setCategories(resData?.data?.categories)
        }

      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
    }

    fetchCategories()


  }, [currentUser])

  console.log(categories)

  return (
    <div className="px-[5%] divide-y " >
      <div className="pb-2" >
        <h1 className="font-bold text-xl text-center" >Categories</h1>
      </div>


      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto py-5" >
        {loading ? <p>
          loading...
        </p> : (
          categories.map(category => {

            return <Category key={category.id} category={category} />

          })
        )}
      </div>
    </div>


  )

}

export default CategoriesContainer