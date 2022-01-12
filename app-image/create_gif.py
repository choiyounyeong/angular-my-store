import imageio

images_base_name = 'productlist'
filenames = [images_base_name + str(i+1) + '.png' for i in range(6)]
images = []
for filename in filenames:
    images.append(imageio.imread(filename))
imageio.mimsave('./mystoreapp.gif', images, format='GIF', duration=1.5)