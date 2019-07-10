require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "should not save user without data" do
    user = User.new
    assert_not user.save, "Saved user without data"
  end

  test "user has a username" do
    user = User.new
    assert user.username
    assert user.email
  end
end
