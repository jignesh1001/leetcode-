/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map(); 
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1; // Not found
  }

  let value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    
    let firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey);
  }
};
