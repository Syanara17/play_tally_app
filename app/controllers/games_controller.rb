class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  # GET /games
  # GET /games.json
  def index
    @games = Game.all
  end

  # GET /games/1
  # GET /games/1.json
  def show
  end

  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def edit
  end

  def save
    if(@game)
      @game.save
    else
      @game = Game.new(game_params)
    end

    flash.now[:success] = "Game Saved!"
  end

  # POST /games
  # POST /games.json
  def create
    @game = Game.new(game_params)
    @game.user_id = current_user.id
    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
        format.json { render :show, status: :created, location: @game }
      else
        format.html { render :new }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    if @game.update(game_params)
      if(params[:commit] == "Finish and Save!")
        flash[:success] = "Game was successfully saved." 
        redirect_to edit_game_path
      end
    else
      flash.now[:error] = "oops there was an issue!" 
      redirect_to edit_game_path
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      # params.fetch(:game, {})
      params.require(:game).permit(:id, :current_quarter, :home_team, :visitor_team, :coach, :week, players_attributes: 
        [:id, :jersey_number, :name, :quarter_one_plays, :quarter_two_plays, :quarter_three_plays, :quarter_four_plays,
        :position, :comment, :overtime_plays, :active, :_destroy],
        score_attributes:[:id, :home_quarter_one, :home_quarter_two, :home_quarter_three, :home_quarter_four,
        :visit_quarter_one, :visit_quarter_two, :visit_quarter_three, :visit_quarter_four, :home_overtime, :visit_overtime, :_destroy])
    end
end
