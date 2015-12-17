class AdminController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

end


