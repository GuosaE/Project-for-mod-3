class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image
      t.integer :servings
      t.integer :readyInMinutes
      t.string :sourceName
      t.string :sourceUrl
      t.string :cuisines
      t.boolean :dairyFree
      t.boolean :glutenFree
      t.boolean :vegan
      t.boolean :vegetarian
      t.string :ingredients

      t.timestamps
    end
  end
end
