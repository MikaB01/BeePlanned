class PerusalController < ApplicationController
  def new
    @hive = Hive.find(params[:hive_id])
  end

  def show
    @hive = Hive.find(params[:hive_id])
    @perusals = Perusal.where(hive_id: @hive.id)
    @perusals = @perusals.sort_by { |per |per.perusal_date  }
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
