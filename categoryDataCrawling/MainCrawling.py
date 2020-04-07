# -*- coding: utf-8 -*-
from datetime import datetime

#from CrawlingCategory.GameCategory import GameCategory
#from CrawlingCategory.FoodCategory import FoodCategory
#from CrawlingCategory.TextCategory import TextCategory
#from CrawlingCategory.TravelPhotoCategory import TravelPhotoCategory
from CrawlingCategory.MusicCategory import MusicCategory

import time
search = '화장실'
URL = 'https://www.google.com/search?sxsrf=ALeKk02pJOTlDbIGTKO5aeyoR1b8aSQBUA%3A1586238516987&source=hp&ei=NBSMXsbEOdny-QaXjoTACw&q='+\
      search+'&oq='+search+'&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgcIIxDqAhAnOgUIABCDAToECA' \
                           'AQCjoGCAAQChAqOgcIABAUEIcCShUIFxIRMGcxMjlnMjI0ZzExOWcxMjNKDQgYEgkwZzJnMmcyZzFQtRpYhSxgpS1oB3AAeAGAAcUCiAHyDJIBCDA' \
                           'uMTEuMC4xmAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab&ved=0ahUKEwjGrtP6ztXoAhVZed4KHRcHAbgQ4dUDCAc&uact=5'

def job_day():
    tempStr = __file__
    today = str(datetime.today().year) + "%02d" % datetime.today().month + "%02d" % datetime.today().day

    for i in range(1):
        rootPath = tempStr[:-16] # 현재 프로그램 경로

        for j in range(350):
            j += 1
            MusicCategory(pageNum=j, rootPath=rootPath)

        #GameCategory(count=135, rootPath=rootPath)

        print('\n')
        print("="*120)
        print('\n\t' + str(today) + ' 크롤링 완료')
        print('\n')
        print("=" * 120)


if __name__ == '__main__':
    job_day()
    #schedule.every().days.at("11:55").do(job_day)
    #while True:
        #schedule.run_pending()
        #time.sleep(1)
