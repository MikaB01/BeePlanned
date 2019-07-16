class HiveController < ApplicationController
  def index
    @locations = Location.all
  end

  def create

    @hive = Hive.new(hive_params)

    if @hive.save
      redirect_to @hive
    else
      flash.alert = "Wrong data!"
    end

  end

  private
  def hive_params
    params.permit(:hive_number, :colony_type, :year_color, :colony_created_at, :queen_added_at, :breed, :hive_type, :location_id)
  end
end
