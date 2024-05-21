# this file generates affiliate links
# demo with nike product urls

def generate_affiliate_links(product_urls, affiliate_id):
    affiliate_links = {}
    for product, url in product_urls.items():
        affiliate_link = f"{url}?affid={affiliate_id}"
        affiliate_links[product] = affiliate_link
    return affiliate_links

# Example usage
product_urls = {
    'Stussy Hoodie': 'https://www.stussy.com/collections/mens-hoodies-sweatshirts/products/1914870-basic-stussy-crew-navy',
    'Essentials Hoodie': 'https://fearofgod.com/collections/essentials-mens-tops/products/essentials-sp24-pullover-hoodie-ink-202sp244260f',
    'Nike Air Force 1': 'https://www.nike.com/t/air-force-1-07-mens-shoes-jBrhbr/CW2288-111?_gl=1*4rw72t*_up*MQ..&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz1_zLLRESQQlknN0j1saWZDzquGiFfbSKEE9AKikVxN9AnBuQZg_1fQaAp8BEALw_wcB&gclsrc=aw.ds',
    'Champion Hoodie': 'https://www.champion.com/powerblend-graphic-fleece-hoodie-40-big-and-tall-41.html'

}
affiliate_id = '12345'
affiliate_links = generate_affiliate_links(product_urls, affiliate_id)
for product, link in affiliate_links.items():
    print(f"{product}: {link}")
