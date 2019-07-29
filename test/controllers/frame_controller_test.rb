require 'test_helper'

class FrameControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get frame_create_url
    assert_response :success
  end

end
