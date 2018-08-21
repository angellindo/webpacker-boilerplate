import SuperClass from "./super.coffee"

class Text extends SuperClass
  stringName: ->
    return @superString() + "Coffee hello world UGGGHH!!!"

export default Text
