require 'test_helper'

class PerusalControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get perusal_new_url
    assert_response :success
  end

  test "should get show" do
    get perusal_show_url
    assert_response :success
  end

end
