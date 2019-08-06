class PerusalController < ApplicationController
  def new
  end

  def show
  end

  def create

    @perusal = Perusal.new(perusal_params)

    if @perusal.save
      redirect_to hive_path(@perusal.hive_id)
    else
      flash.alert = "Wrong data!"
    end

  end

  private
  def perusal_params
    params.permit(:population_size, :honeycomb_seat, :gentleness, :brood, :bees, :drone_brood_cutted, :queen_seen, :hive_weight, :remark, :perusal_date, :hive_id)
  end
end
