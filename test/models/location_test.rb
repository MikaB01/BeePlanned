require 'test_helper'

class LocationTest < ActiveSupport::TestCase

  test "don't save location without permitted parameter" do
    location = Location.new
    assert_not location.save
  end

  test "has location permitted parameter" do
    location = Location.new
    location.name = "name"
    location.country = "country"
    location.state = "state"
    location.zip_code = "12345"
    location.city = "city"
    location.street = "street"
    location.street_number = "10"

    assert location.name
    assert location.country
    assert location.state
    assert location.zip_code
    assert location.city
    assert location.street
    assert location.street_number

    /assert location.save/
  end
end
