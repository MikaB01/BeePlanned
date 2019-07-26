class SuperController < ApplicationController

  def create

    @super = Super.new(super_params)

    if @super.save
      redirect_to hive_path(@super.hive_id)
    else
      flash.alert = "Wrong data!"
    end

  end

  private
  def super_params
    params.permit(:number, :super_type)
  end
end
