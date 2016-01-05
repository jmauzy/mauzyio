class PostsController < ApplicationController
  before_action :authenticate_admin!, except: [:show]

  def show
    @post = Post.find(params[:id])
    @title = @post.title + " | Mauzy.io"
    increment_views(@post)
  end
  
  def edit
    @post = Post.find(params[:id])
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      flash[:success] = "Post Created!"
    else
      flash[:error] = "Something Went Wrong"
    end
    redirect_to :back
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      flash[:success] = "Post Updated!"
    else
      flash[:error] = "Something Went Wrong"
    end
    redirect_to @post
  end
      
  
  def destroy
    Post.find(params[:id]).destroy
    flash[:success] = "Post Deleted"
    redirect_to :back
  end

  private
    
    def post_params
      params.require(:post).permit(:title, :description, :body)
    end

    
    def increment_views(post)
      if !admin_signed_in?
        Post.increment_counter :views, post.id
      end
    end

      
      
end
