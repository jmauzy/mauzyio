class StaticPagesController < ApplicationController
  
  def index
    @posts = Post.last(5).reverse
  end

  def about
  end

end
