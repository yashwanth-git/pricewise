"use server";
import { scrapeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    
    if(!scrapedProduct) return;


  } catch (err: any) {
    throw new Error(`Failed to create/update product ${err.message}`);
  }
}
