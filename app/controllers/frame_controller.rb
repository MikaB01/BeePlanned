class FrameController < ApplicationController
  def create
    @frame = Frame.new(frame_params)
    @super = Super.find(@frame.super_id)

    if @frame.save
      redirect_to hive_path(@super.hive_id)
    else
      flash.alert = "Wrong data!"
    end
  end

  def destroy
    @frame = Frame.find(params[:id])
    @super = Super.find(@frame.super_id)

    @frame.destroy
    redirect_to hive_path(@super.hive_id)
  end

  private
  def frame_params
    params.permit(:letter, :frame_type, :super_id)
  end
end
