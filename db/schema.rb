# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181006041217) do

  create_table "games", force: :cascade do |t|
    t.string "home_team"
    t.string "visitor_team"
    t.string "coach"
    t.datetime "game_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "score_id"
    t.integer "week"
    t.integer "current_quarter"
    t.integer "user_id"
    t.index ["score_id"], name: "index_games_on_score_id"
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "players", force: :cascade do |t|
    t.integer "jersey_number"
    t.string "name"
    t.integer "quarter_one_plays"
    t.integer "quarter_two_plays"
    t.integer "quarter_three_plays"
    t.integer "quarter_four_plays"
    t.string "position"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
    t.integer "overtime_plays"
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "home_quarter_one"
    t.integer "home_quarter_two"
    t.integer "home_quarter_three"
    t.integer "home_quarter_four"
    t.integer "visit_quarter_one"
    t.integer "visit_quarter_two"
    t.integer "visit_quarter_three"
    t.integer "visit_quarter_four"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "game_id"
    t.integer "home_overtime"
    t.integer "visit_overtime"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
