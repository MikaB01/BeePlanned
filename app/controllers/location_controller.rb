class LocationController < ApplicationController

  def index
    @locations = Location.all
  end

  def show
    @location = Location.find(params[:id])
    @locations = Location.all
    @hives = Hive.where(location_id: @location.id)
    @hives = @hives.sort_by { |hive |hive.hive_number  }
  end

  def edit
    @location = Location.find(params[:id])
  end

  def create
    if params[:latitude] != "" && params[:longitude] != ""
      if params[:country] != "" && params[:state] != ""
        @location = Location.new(location_params)
      else
        @location = Location.new(location_coordinates_params)
      end
    else if params[:country] && params[:state] && params[:zip_code] && params[:city] && params[:street] && params[:street_number]
           @location = Location.new(location_address_params)
         else
           flash["Location not Valid"]
         end
    end

    @location.user_id = current_user.id


    if @location.save
      redirect_to @location
    else
      flash.alert = "Wrong data!"
    end

  end

  def update
    @location = Location.find(params[:id])

    if @location.user_id == current_user.id
      if @location.update(location_params)
        redirect_to @location
      else
        render 'edit'
      end
    end
  end

  def destroy
    @location = Location.find(params[:id])
    if @location.user_id == current_user.id
      @location.destroy
      redirect_to location_path
    else
      flash[:danger] = "You are not allowed to delete this article!"
    end
  end

  private
  def location_params
    params.permit(:name, :country, :state, :zip_code, :city, :street, :street_number, :latitude, :longitude)
  end
  def location_address_params
    params.permit(:name, :country, :state, :zip_code, :city, :street, :street_number)
  end
  def location_coordinates_params
    params.permit(:name, :latitude, :longitude)
  end
end
