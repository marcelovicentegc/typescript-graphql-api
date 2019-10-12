package src.targets



data class MutationCreateAnimalArgs(
    val species: String,
    val favoriteFood: String
) {
  constructor(args: Map<String, Any>) : this(
      args["species"] as String,
      args["favoriteFood"] as String
  )
}
data class MutationUpdateAnimalArgs(
    val id: Any,
    val species: String,
    val favoriteFood: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["species"] as String,
      args["favoriteFood"] as String
  )
}
data class MutationDeleteAnimalArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}

data class QueryAnimalArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}