import useLanguageStore from "../stores/useLanguageStore"

const LanguageComponent = () => {

    const {language,setLanguage} = useLanguageStore()
  return (
    <>
    <div>Use of language Store from another Component</div>
     <div>Language: {language}</div>
        <div className=" flex gap-2">
          <button
            className="px-3 bg-blue-500 py-1 text-white font-bold"
            onClick={() => setLanguage("en")}
            >
            English
          </button>
          <button
            className="px-3 bg-blue-500 py-1 text-white font-bold"
            onClick={() => setLanguage("fr")}
            >
            French
          </button>



        </div>

        <div className="mt-10">

          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
</div>
              </>
  )
}

export default LanguageComponent