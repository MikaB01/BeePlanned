require 'test_helper'

class HiveControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hive_index_url
    assert_response :success
  end

end
