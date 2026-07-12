import api from './api';

export const eduService = {
  getSubjects: async () => {
    const response = await api.get('/edu/subjects');
    return response.data;
  },
  getLessons: async (subjectSlug: string) => {
    const response = await api.get(`/edu/subjects/${subjectSlug}/lessons`);
    return response.data;
  },
  getLessonDetail: async (subjectSlug: string, lessonSlug: string) => {
    const response = await api.get(`/edu/subjects/${subjectSlug}/lessons/${lessonSlug}`);
    return response.data;
  },
  getPapers: async (subjectSlug: string) => {
    const response = await api.get(`/edu/subjects/${subjectSlug}/papers`);
    return response.data;
  },
  getPapersByYear: async (year: number) => {
    const response = await api.get(`/edu/papers/year/${year}`);
    return response.data;
  },
  askAITutor: async (subjectId: number, message: string, chatId?: number) => {
    const response = await api.post('/edu/ai-tutor/ask', {
      subject_id: subjectId,
      message,
      chat_id: chatId,
    });
    return response.data;
  },
  getAIChatHistory: async (chatId: number) => {
    const response = await api.get(`/edu/ai-tutor/chat/${chatId}`);
    return response.data;
  },
};
