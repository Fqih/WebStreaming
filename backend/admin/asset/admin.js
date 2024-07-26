document.getElementById('getBannersForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const page = document.getElementById('page').value;
  const limit = document.getElementById('limit').value;
  const response = await fetch(`http://localhost:5000/api/banners?page=${page}&limit=${limit}`);
  const data = await response.json();
  const bannersList = document.getElementById('bannersList');
  bannersList.innerHTML = data.banners.map(banner => `
    <li>
      <p><strong>ID:</strong> ${banner.id}</p>
      <a href="${banner.imageUrl}" target="_blank">
        <img src="${banner.imageUrl}" alt="Banner Image">
      </a>
      <p><strong>Description:</strong> ${banner.description}</p>
      <p><strong>Views:</strong> ${banner.views}</p>
      <p><strong>Rating:</strong> ${banner.rating}</p>
      <p><strong>Synopsis:</strong> ${banner.synopsis}</p>
      <p><strong>Release Date:</strong> ${banner.release}</p>
      <p><strong>Studio:</strong> ${banner.studio}</p>
      <p><strong>Genre:</strong> ${banner.genre}</p>
      <p><strong>Status:</strong> ${banner.status}</p>
      <p><strong>Total Episodes:</strong> ${banner.totalEpisodes}</p>
    </li>
  `).join('');
});

document.getElementById('postBannerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const status = [];
  if (formData.has('statusOngoing')) status.push('Ongoing');
  if (formData.has('statusCompleted')) status.push('Completed');
  const data = {
    imageUrl: formData.get('imageUrl'),
    description: formData.get('description'),
    views: formData.get('views'),
    rating: formData.get('rating'),
    synopsis: formData.get('synopsis'),
    release: formData.get('release'),
    studio: formData.get('studio'),
    genre: formData.get('genre'),
    status: status.join(', '),
    totalEpisodes: formData.get('totalEpisodes')
  };
  const response = await fetch('http://localhost:5000/api/banners', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    alert('Banner added successfully!');
    document.getElementById('postBannerForm').reset();
  } else {
    alert('Failed to add banner');
  }
});

document.getElementById('updateBannerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const bannerId = formData.get('updateId');
  const status = [];
  if (formData.has('updateStatusOngoing')) status.push('Ongoing');
  if (formData.has('updateStatusCompleted')) status.push('Completed');
  const data = {
    imageUrl: formData.get('updateImageUrl'),
    description: formData.get('updateDescription'),
    views: formData.get('updateViews'),
    rating: formData.get('updateRating'),
    synopsis: formData.get('updateSynopsis'),
    release: formData.get('updateRelease'),
    studio: formData.get('updateStudio'),
    genre: formData.get('updateGenre'),
    status: status.join(', '),
    totalEpisodes: formData.get('updateTotalEpisodes')
  };
  const response = await fetch(`http://localhost:5000/api/banners/${bannerId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    alert('Banner updated successfully!');
    document.getElementById('updateBannerForm').reset();
  } else {
    alert('Failed to update banner');
  }
});

document.getElementById('deleteBannerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const bannerId = document.getElementById('deleteId').value;
  const response = await fetch(`http://localhost:5000/api/banners/${bannerId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    alert('Banner deleted successfully!');
    document.getElementById('deleteBannerForm').reset();
  } else {
    alert('Failed to delete banner');
  }
});
