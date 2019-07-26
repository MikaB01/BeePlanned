class HiveController < ApplicationController
  def index
    @locations = Location.all
  end

  def show
    @hive = Hive.find(params[:id])
    @location = Location.find(@hive.location_id)
    @supers = Super.where(hive_id: @hive.id)
  end

  def create

    @hive = Hive.new(hive_params)

    if @hive.save
      redirect_to location_path(@hive.location_id)
    else
      flash.alert = "Wrong data!"
    end

  end

  private
  def hive_params
    params.permit(:hive_number, :colony_type, :year_color, :colony_created_at, :queen_added_at, :breed, :hive_type, :location_id)
  end
end
