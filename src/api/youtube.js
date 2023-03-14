export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id: id } })
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          regionCode: 'KR',
          relatedToVideoId: id,
          type: 'video',
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }

  async getChannelInfo(channelId) {
    return this.apiClient.getChannelInfo({
      params: {
        part: 'snippet',
        id: channelId,
      },
    });
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 20,
          q: keyword,
          regionCode: 'KR',
          type: 'video',
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 20,
          regionCode: 'KR',
        },
      })
      .then(res => res.data.items);
  }
}
