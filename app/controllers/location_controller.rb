class LocationController < ApplicationController

  def show
    @location = Location.find(params[:id])
  end

  def edit
    @location = Location.find(params[:id])
  end

  def create
    @location = Location.new(location_params)

    @location.user_id = current_user.id

    if @location.save
      redirect_to @location
    else
      render 'new'
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
    params.permit(:name, :country, :state, :zip_code, :city, :street, :street_number)
  end
end
