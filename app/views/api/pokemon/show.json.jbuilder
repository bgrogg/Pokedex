json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.items do
  json.array! @pokemon.items
end
